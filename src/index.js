const { default: User } = require("./User/user");

const user = new User();

document.getElementById("submit").addEventListener("click", get_user);
document.getElementById("post").addEventListener("click", get_post);

async function get_user() {
  if (document.getElementById("user_id").value != "") {
    var user_id = document.getElementById("user_id").value;
    var _user = await user.get_user(String(user_id));

    console.log(_user);

    document.getElementById("id").innerHTML = _user.id;
    document.getElementById("name").innerHTML = _user.name;
    document.getElementById("email").innerHTML = _user.email;
  }
}

async function get_post() {
  var user_id = document.getElementById("user_id").value;
  var _user = await user.get_post(String(user_id));
  console.log(_user);
}
