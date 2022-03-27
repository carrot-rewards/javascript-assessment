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
  var table = document.getElementById("post-table");

  console.log(_user);
  var header = document.createElement("th");
  var headId = document.createElement("td");
  var headIdText = document.createTextNode("Id");
  var headTitle = document.createElement("td");
  var headTitleText = document.createTextNode("Title");
  var headBody = document.createElement("td");
  var headBodyText = document.createTextNode("Body");

  headId.appendChild(headIdText);
  headTitle.appendChild(headTitleText);
  headBody.appendChild(headBodyText);

  header.appendChild(headId);
  header.appendChild(headTitle);
  header.appendChild(headBody);

  table.appendChild(header);

  _user.forEach(element => {
    var row = document.createElement("tr");
    var y = document.createElement("td");
    var y1 = document.createTextNode(element.id);
    var z = document.createElement("td");
    var z1 = document.createTextNode(element.title);
    var a = document.createElement("td");
    var a1 = document.createTextNode(element.body);
    
    y.appendChild(y1);
    z.appendChild(z1);
    a.appendChild(a1);

    row.appendChild(y);
    row.appendChild(z);
    row.appendChild(a);

    table.appendChild(row);

  });
}
