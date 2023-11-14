document.addEventListener('DOMContentLoaded', function() {
	var hideSuggestedPostsCheckbox = document.getElementById('hideSuggestedPosts');
	hideSuggestedPostsCheckbox.addEventListener('change', function() {
	  browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		browser.tabs.sendMessage(tabs[0].id, {
		  action: 'toggleHideSuggestedPosts',
		  value: hideSuggestedPostsCheckbox.checked
		});
	  });
	});
  });
  