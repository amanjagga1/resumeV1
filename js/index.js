$(function()
{
	$('a[href*=#]:not([data-toggle],[data-target],[data-slide])').on('click', function(e)
		{
			e.preventDefault();
				if( $( $.attr(this, 'href') ).length > 0 )
				{
					$('html, body').animate(
					{
						scrollTop: $( $.attr(this, 'href') ).offset().top
					}, 400);
				}
				return false;
			});
});

(function() {
	if (navigator.userAgent.toLowerCase().indexOf('chrome') < 0)
		$("#noChrome").modal();
})();
for(skill in skills) {
	if(skills.hasOwnProperty(skill)) {
		createHTMLforcategory(skills[skill], skill);
	}
}
function createHTMLforcategory(skill, category) {
	for(item in skill) {
		if (skill.hasOwnProperty(item)) {
			var listItem = document.createElement('li');
			var title = document.createElement('span');
			title.innerHTML = item;
			//title.className= "floatLeft";
			listItem.appendChild(title);
			var score = document.createElement('span');
			score.className = "floatRight";
			for(var i = 0; i < 5; i++) {
				var star = document.createElement('span');
				if (i < skill[item])
					star.className="glyphicon glyphicon-star filled";
				else
					star.className ="glyphicon glyphicon-star empty";
				score.appendChild(star);
			}
			listItem.appendChild(score);
			//document.getElementById(category + 'Stars').appendChild(skillStars);
			document.getElementById(category).appendChild(listItem);
		}
		
	}
}
function setAndDisplayCarousel(project) {
	var carousel =document.getElementById('myCarousel');
	var images = carousel.getElementsByTagName('img');
	for(var i=0; i<images.length;i++) {
		images[i].setAttribute("src","images/" + project +'_' + (i+1) + '.jpg' );
	}
	$("#myCarousel").carousel(0);
	carousel.style.display='block'
};

