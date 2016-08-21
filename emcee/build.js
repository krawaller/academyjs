var source = __dirname + '/../source/'
var output = __dirname + '/../slides/'

var revealTheme = 'black.css'
var highlightTheme = 'zenburn.css'



var fsx = require("fs-extra")
var path = require("path")
var fm = require('front-matter')
var hljs = require('highlight.js')

var DIVIDER = /\n~{1,}[  ]*\n/g

var beautify_html = require('js-beautify').html
var beautify = function(html){
  return beautify_html(html,{});
}

var marked = require('marked')
marked.setOptions({
  highlight: function(code,lang) {
     if (lang){
      return hljs.highlight(lang,code).value
     }
     return hljs.highlightAuto(code).value
    }
});

function getDirs(srcpath) {
  return fsx.readdirSync(srcpath).filter(function(file) {
    return fsx.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function getFiles(srcpath) {
  return fsx.readdirSync(srcpath).filter(function(file) {
    return file !== '.DS_Store'
  })
}

function makeSlides(lump){
  return lump.split(DIVIDER).map(function(sec){
    var content = marked( sec.replace(/^\s*|\s*$/g,'') );
    var pre = '<section>'
    if (content.match(/^\s*<p>\s*<strong>(Question|Quiz):?<\/strong>/)){
      pre = '<section class="question">'
    } else if (content.match(/^\s*<p>\s*<strong>Answer:?<\/strong>/)){
      pre = '<section class="answer">'
    } else if (content.match(/^\s*<p>\s*<strong>Challenge:?<\/strong>/)){
      pre = '<section class="challenge">'
    }
    return pre + content + '</section>'
  }).join('')
}

fsx.removeSync(output);
fsx.mkdirSync(output);

var indexTemplate = fsx.readFileSync('./templates/indextemplate.html')+'';
var chapterTemplate = fsx.readFileSync('./templates/chaptertemplate.html')+'';
var sectionTemplate = fsx.readFileSync('./templates/sectiontemplate.html')+'';




/**** Copy in all css files *****/

fsx.copySync('./styles',output+'styles')
fsx.copySync('./node_modules/reveal.js/css/reveal.css',output+'styles/reveal.css')
var courseStyleTags = []
try {
  getFiles(source+'styles').forEach(function(file){
    courseStyleTags.push('<link rel="stylesheet" href="styles/'+file+'">')
    fsx.copySync(source+'styles/'+file,output+'styles/'+file)
  })
} catch(e){}



/**** Some extra dancing with the font stuff that reveal uses ****/ 

fsx.copySync('./node_modules/reveal.js/lib/font',output+'font')
var themeFile = fsx.readFileSync('./node_modules/reveal.js/css/theme/'+revealTheme)+''
fsx.writeFileSync(output+'styles/theme.css',themeFile.replace('../../lib/font','../font'))


/***** And some fixes for the highlightJS style ****/
var codeFile = fsx.readFileSync('./node_modules/highlight.js/styles/'+highlightTheme)+''
fsx.writeFileSync(output+'styles/code.css',codeFile.replace(/\.hljs\s*\{/,'pre > code {'))



/**** Copy in all js files *****/

fsx.mkdirSync(output+'js');
fsx.copySync('./node_modules/reveal.js/js/reveal.js',output+'js/reveal.js')
fsx.copySync('./node_modules/reveal.js/lib/js/head.min.js',output+'js/head.js')
fsx.copySync('./node_modules/jquery/dist/jquery.min.js',output+'js/jquery.js')
var courseScriptTags = []
try {
  getFiles(source+'scripts').forEach(function(file){
    courseScriptTags.push('<script type="text/javascript" src="js/scripts/'+file+'"></script>')
    fsx.copySync(source+'scripts/'+file,output+'js/scripts/'+file)
  })
} catch(e){}



/**** Copy in resources *****/
try {
  fsx.copySync(source+'resources',output+'resources')
} catch(e) {}



/**** Build course data object ****/

var coursedef = fm(fsx.readFileSync(source+'index.md')+'')
var course = {
  title: coursedef.attributes.title,
  splash: coursedef.body,
  chapters: getDirs(source+'chapters').map(function(chapDir){
    var chapter = fm(fsx.readFileSync(source+'chapters/'+chapDir+'/chapter.md')+'')
    chapter.sections = getFiles(source+'chapters/'+chapDir+'/sections').map(function(secFile){
      return fm(fsx.readFileSync(source+'chapters/'+chapDir+'/sections/'+secFile)+'')
    })
    return chapter;
  }).filter(function(c){
    return !c.attributes.draft;
  })
}



/***** Generate index html file *****/

var ifile = indexTemplate
ifile = ifile.replace('SPLASH',marked(course.splash))
ifile = ifile.replace(/COURSENAME/g,course.title)
ifile = ifile.replace(/NUMBEROFCHAPTERS/g,course.chapters.length)
ifile = ifile.replace('CHAPTERLINKS',course.chapters.map(function(chapter,n){
  return '<li><a class="chapterlink" href="chapter'+(n+1)+'.html">'+chapter.attributes.title+'</a></li>'
}).join(''))
fsx.writeFileSync(output+'/index.html',beautify(ifile))




/****** Generate chapter html files **********/

course.chapters.forEach(function(chapter,n){
  var cfile = chapterTemplate
  var slides = '', sectionlinks = ''
  if ((chapter.body||'').match(/^\W*$/)){
    var nbrinitialslides = 0
    cfile = cfile.replace(/CHAPTERINITIALSLIDES/,'')
  } else {
    var nbrinitialslides = (chapter.body||'').split(DIVIDER).length
    cfile = cfile.replace(/CHAPTERINITIALSLIDES/,makeSlides(chapter.body))
  }
  cfile = cfile.replace(/NUMBEROFINITIALSLIDES/,nbrinitialslides)
  cfile = cfile.replace(/CHAPTERTITLE/g,chapter.attributes.title)
  cfile = cfile.replace(/CHAPTERNUMBER/g,n+1)
  cfile = cfile.replace(/NUMBEROFCHAPTERS/g,course.chapters.length)
  cfile = cfile.replace(/NUMBEROFSECTIONS/g,chapter.sections.length)
  cfile = cfile.replace(/CHAPTERTAGLINE/,chapter.attributes.tagline)
  cfile = cfile.replace(/COURSESPECIFICSTYLES/,courseStyleTags.join('\n'))
  cfile = cfile.replace(/COURSESCRIPTTAGS/,courseScriptTags.join('\n'))
  if (chapter.attributes.finally){
    cfile = cfile.replace(/FINALSLIDE/,'<section>'+marked(chapter.attributes.finally)+'</section>')
  } else {
    cfile = cfile.replace(/FINALSLIDE/,'')
  }

  chapter.sections.forEach(function(section,s){
    sectionlinks += '<li><a href="#/'+(nbrinitialslides+s+2)+'">'+section.attributes.title.replace(/ /g,'&nbsp;')+'</a></li>'
    var sec = sectionTemplate
    sec = sec.replace('SECTIONNUMBER',s+1)
    sec = sec.replace('SECTIONCOUNT',chapter.sections.length)
    sec = sec.replace('SECTIONTITLE',section.attributes.title)
    sec = sec.replace('SECTIONTAGLINE',section.attributes.tagline)
    sec = sec.replace('SECTIONSLIDES',makeSlides(section.body))
    slides += sec
  })
  cfile = cfile.replace('SECTIONLINKS',sectionlinks)
  cfile = cfile.replace('CHAPTERCONTENT',slides)
  cfile = cfile.replace('CHAPTEREND',(
    n === course.chapters.length-1 ?
      '<h1>The end</h1>'+
      '<p>...or perhaps the beginning?</p>'+
      '<br/><br/>'+
      '<p><a href="index.html">back to index</a></p>'
    :
      '<h3>Next</h3>'+
      '<a href="chapter'+(n+2)+'.html">'+course.chapters[n+1].attributes.title+'</a>'
  ))
  fsx.writeFileSync(output+'/chapter'+(n+1)+'.html',beautify(cfile))
})






