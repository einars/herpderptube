(function() {
    var selector = 'div.comment-renderer-text-content';

    function randomDerp()
    {
	this.derpOriginal = $(this).html();

	$(this).click(function() {
	    $(this).html(this.derpOriginal);
	});

	var preprocessed = this.derpOriginal
	  .replace(/<[^>]+>/g, '') // remove links etc,
	  .replace(/&nbsp;/g, ' '), // non-breaking space crap

	  words = preprocessed.split(/([\(\).,?!:; \n]+)/), // split by punctuation
	  buf = [],
	  i;


	for (i = 0; i < words.length; i++) {
	  if (i % 2 == 1) {
	    buf.push(words[i]);
	  } else {
	    if (words[i] !== '' && words[i] !== '\ufeff') {
	      if (words[i] === 'is' || words[i] === 'a' || words[i] === 'I' || words[i] === 'the') {
		buf.push(words[i]);
	      } else if (words[i][0] === words[i][0].toUpperCase()) {
		buf.push(Math.random() > 0.5 ? 'Herp' : 'Derp');
	      } else {
		buf.push(Math.random() > 0.5 ? 'herp' : 'derp');
	      }
	    }
	  }
	}

	// add derped class
	$(this).addClass("derped");

	return '<span>' + buf.join('') + '</span>';
    }

    // only select un-derped elements
    $(selector).not('.derped').html(randomDerp);

    setInterval(function() {
	// only select un-derped elements
	$(selector).not('.derped').html(randomDerp);
    }, 250);
})();
