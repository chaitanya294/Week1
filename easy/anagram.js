/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	const Map1 = new Map();
	const Map2 = new Map();
	for(let i = 0; i<str1.length; i++){
		if(Map1.has(str1[i]) == false){
			Map1.set(str1[i], 1);
		}
		else{
			Map1.set(str1[i], Map1.get(str1[i])+1);
		}
	}
	for(let i = 0; i<str2.length; i++){
		if(Map2.has(str2[i]) == false){
			Map2.set(str2[i], 1);
		}
		else{
			Map2.set(str2[i], Map2.get(str2[i])+1);
		}
	}
	let ans = true;
	if(Map1.size != Map2.size){
        return false;
    }
	for(let [key, value] of Map1){
		if(Map2.has(key) == false){
			ans = false;
			break;
		}
		else{
			if(value != Map2.get(key)){
				ans = false;
				break;
			}
		}
	}
	return ans;
}
module.exports = isAnagram;
