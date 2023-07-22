const followBtn = document.getElementById("follow");
const post123 = document.getElementById("post-amount");
const likes123 = document.getElementById("likes-amount");
const follow123 = document.getElementById("followers-amount");

const setContent = () => {
  let postAmount = 532;
  let likeAmount = 1033;
  let followAmount = 736;
  post123.textContent = postAmount;
  likes123.textContent = likeAmount;
  follow123.textContent = followAmount;
};
setContent();

const increaseFollowers = () => {
  follow123.textContent = followAmount + 1;
  followBtn.textContent = "Following..";
  followBtn.classList.add("following-effect");
};

followBtn.addEventListener("click", increaseFollowers);
