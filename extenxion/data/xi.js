// I stole most of this code from here:
// https://github.com/panicsteve/cloud-to-butt

var then = new Date(2015, 10, 15);

var now = Date.now();

if (now > then) walk(document.body);

function walk(node) 
{
  // I stole this function from here:
  // http://is.gd/mwZp7E
  
  var child, next;

  switch ( node.nodeType )  
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child ) 
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode)
{
  textNode.nodeValue = transformText(textNode.nodeValue);
}

function transformText(text)
{
  var t = text;

  t = t.replace(/(the )?haunted trail/i, 'Xi Spooky Path');

  t = t.replace(/\bthe\b/, function(match) {
    return (Math.random() < 0.1) ? 'xi' : 'the';
  });
  t = t.replace(/\bThe\b/, function(match) {
    return (Math.random() < 0.1) ? 'Xi' : 'The';
  });

  return t
}
