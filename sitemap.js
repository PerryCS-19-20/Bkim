function buildMap(){
                var things = document.getElementById("inputText");
                var span = document.getElementById("listArea");
                var unorderedList = document.createElement("li");
                unorderedList.textContent = things.value;
                span.appendChild(unorderedList);
            }