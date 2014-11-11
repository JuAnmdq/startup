$(document).ready(function() {

	$.getJSON('profile.json', function(data) {
		var src = $('#src-handlebars').html();
      template = Handlebars.compile(src);   
      html = template(data);
  	$('#content-handlebars').html(html);

  	var srcUnderscore = $("#src-underscore").html();
  	var templateUnderscore = _.template(srcUnderscore, data);
  	$("#content-underscore").html(templateUnderscore);

  	var srcDust = $("#src-dust").html();
    var templateDust = dust.compile(srcDust, "intro");
    dust.loadSource(templateDust, "dusty");
    dust.render("intro", data, function(err, out) {
    $("#content-dust").html(out);
    });		
	});
});