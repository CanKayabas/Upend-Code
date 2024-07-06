element1.onclick = function header() {
    let header = document.createElement('h1');

    fake_body.appendChild(header);
    fake_body.setAttribute("onload", "move('header')");
    let header_class = "header";


    /* draggable codes */

    // Make the DIV element draggable:
    dragElement(header);

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }


    /* draggable codes end */

    /*Headera özellik verme*/

    header.innerText = "Header";
    header.style.position = "absolute";
    header.style.color = "white";
    header.setAttribute('class', `${header_class}`);


    /*Header düzenleme kutusunu açan fonksiyon*/
    header.ondblclick = function customize() {
        var customize_body = document.getElementById('feature')
        /*Daha önce düzenleme kutusu açılmış mı kontrol ediyor yok ise açıyor*/
        if (!customize_body) {

            /*Düzenleme kutusunu oluşturma*/

            left_bar.style.marginTop = '300px'
            left_bar.style.height = 'calc(100% - 300px)'
            

            const customize_div = `    <div class="feature" id="feature"><button class="feature-close" id="feature-close"><i class="fa-solid fa-xmark"></i></button><br>
                <div class="group">
                    <p class="feature-font">Text:</p>
                    <input type="text" value="Header" id="text"><br>
                </div>

                <div class="group">
                    <p class="feature-font">Font Size:</p>
                    <input class="font-inp" type="text" value="" id="font-size"><br>
                </div>

                <div class="group">
                    <p class="feature-font">Font Color:</p>
                    <input class="font-inp" type="text" value="white" id="font-color"><br>
                </div>

                <div class="group">
                    <p class="feature-font">BG Color:</p>
                    <input class="font-inp" type="text" value="" id="bg-color"><br>
                </div>

                <div class="group">
                    <p class="feature-font">Padding:</p>
                    <input class="font-inp" type="text" value="" id="padding"><br>
                </div>

                <div class="group">
                    <p class="feature-font">Class:</p>
                    <input class="font-inp" type="text" value="" id="class"><br>
                </div>

                <div class="group">
                    <p class="feature-font">top:</p>
                    <input class="font-inp" type="text" value="" id="top"><br>
                </div>
    
                <div class="group">
                    <p class="feature-font">left:</p>
                    <input class="font-inp" type="text" value="" id="left"><br>
                </div>

                <div class="group">
                    <button class="feature-delete" id="delete-btn">Delete Element</button>
                    <button class="feature-save" id="save-btn">Save</button>
                </div>
            </div>`

            document.body.insertAdjacentHTML('beforebegin', customize_div)

            /*Düzenlemedeki buton değişkeneleri*/

            var close_btn = document.getElementById('feature-close');
            var save_btn = document.getElementById('save-btn');
            var delete_btn = document.getElementById('delete-btn');

            /*Düzenlemedeki özellikleri değişkenlere atama*/

            var titleInput = document.getElementById('text');
            var fontSizeInput = document.getElementById('font-size');
            var fontColorInput = document.getElementById('font-color');
            var bgColorInput = document.getElementById('bg-color');
            var paddingInput = document.getElementById('padding');
            var ClassInput = document.getElementById('class');
            var topInput = document.getElementById('top');
            var leftInput = document.getElementById('left');


            var title = header.innerText;
            var fontSize = header.style.fontSize;
            var fontColor = header.style.color;
            var bgColor = header.style.backgroundColor;
            var padding = header.style.padding;
            var Class = header.className;

            titleInput.value = title;
            fontSizeInput.value = fontSize;
            fontColorInput.value = fontColor;
            bgColorInput.value = bgColor;
            paddingInput.value = padding;
            ClassInput.value = `${Class}`;

            /*Düzenlemeyi kapatma*/
            close_btn.onclick = function () {
                let feature = document.getElementById('feature');
                (feature).remove();
                left_bar.style.marginTop = "0px"
                left_bar.style.height = '100%'
            }

            delete_btn.onclick = function () {
                let feature = document.getElementById('feature');
                (feature).remove();
                left_bar.style.marginTop = "0px"
                left_bar.style.height = '100%'
                fake_body.removeChild(header);
            }

            save_btn.onclick = function () {
                header.innerText = titleInput.value;
                header.style.fontSize = fontSizeInput.value;
                header.style.color = fontColorInput.value;
                header.style.backgroundColor = bgColorInput.value;
                header.style.padding = paddingInput.value;
                header.setAttribute('class', `${ClassInput.value}`)
                if(topInput.value.trim() != "") {header.style.top = topInput.value;} if(leftInput.value.trim() != "") {header.style.left = leftInput.value;}
                if(titleInput.value.trim() == ""){ header.innerText = "Header" }
            }

        }
        /*Var ise kapatıp yeniden açıyor*/
        else {
            let feature = document.getElementById('feature');
            (feature).remove();
            left_bar.style.marginTop = "0px";
            left_bar.style.height = '100%'
            customize();
        }
    }

}