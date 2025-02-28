function getValue(event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = event.target.value;
        li.style.color = "white";
        li.style.textShadow = "0 0 5px rgb(255, 196, 0)";

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.style.marginLeft = "20px";
        btn.style.borderRadius = "20px";
        btn.style.padding = "2px 2px";
        btn.style.scale = "0.8";
        btn.onclick = function () {
            li.remove();
        };

        localStorage.getItem("user", li);


        li.appendChild(btn);
        document.getElementById("mylist").appendChild(li);

        event.target.value = ""; 
    }
}