// content.js

// This function removes suggested posts using XPath
function removeSuggestedPosts() {
	const suggestedPost1 = document.evaluate(
	  '/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/div[1]/div[1]/div/div/div/div/div[2]/div[4]/span/div/a/div',
	  document,
	  null,
	  XPathResult.FIRST_ORDERED_NODE_TYPE,
	  null
	).singleNodeValue;
  
	const suggestedPost2 = document.evaluate(
	  '/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/div[1]/div[1]/div/div/div/div/div[2]/div[3]/span/div/a/div',
	  document,
	  null,
	  XPathResult.FIRST_ORDERED_NODE_TYPE,
	  null
	).singleNodeValue;
  
	const suggestedPost3 = document.evaluate(
	  '/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/div[1]/div[2]/section/main/div[1]',
	  document,
	  null,
	  XPathResult.FIRST_ORDERED_NODE_TYPE,
	  null
	).singleNodeValue;
  
	if (suggestedPost1) {
	  suggestedPost1.remove();
	}
  
	if (suggestedPost2) {
	  suggestedPost2.remove();
	}
  
	if (suggestedPost3) {
	  suggestedPost3.remove();
	}
  }
  
  // Call the function to remove suggested posts when the extension is activated
  removeSuggestedPosts();
  