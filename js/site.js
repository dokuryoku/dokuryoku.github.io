(function(){
	var logoMap = {
	    "2013/02/02/Osho-ueber-Zen-Meister-Ikkyu":"portrait_of_ikkyu.jpg",
	    "/2013/01/30/Reality-Of-Human-Flight":"wingsuite-flying.png",
        "/2013/01/09/The-Nature-of-Code":"nature-of-code.jpg",
		"/2013/01/25/Markup-Transformation-mit-Enlive":"clojure-logo.png",
        "/2013/01/07/Semantic-Versioning":"dimension-hatross.jpg",
        "/2013/01/06/Das-Streicheln-einer-Rotkrautdose":"phettberg.jpg",
        "/2013/01/04/Random-Numbers-with-State-Monads":"clojure-logo.png",
        "/2013/01/02/Gary-Tarns-Black-Sun":"black-sun.jpg"};

	function lookupLogoFilename() {
		var logoFilename = null;
		var metas = document.getElementsByTagName("meta");
		for (var i = 0; i < metas.length; i++) {
			var metaName = metas[i].getAttribute("name");
			if (metaName == "page_id") {  
				var pageId = metas[i].getAttribute("content");
				if (pageId) {
					logoFilename = logoMap[pageId];
				}
			}
		}
		return logoFilename;    
	}; 

	function setupLogo() {
		var logoFilename = lookupLogoFilename();
		if (logoFilename) {
			var images = document.getElementsByTagName("img");
			for (var i = 0; i < images.length; i++) {
				if (images[i].className.indexOf('photo') >= 0) {
					images[i].src = "/images/" + logoFilename;
				}
			}
		}
	};

	setupLogo();
})();
