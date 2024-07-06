element5.onclick = function div() {
    let div = document.createElement('div');

    fake_body.appendChild(div);
    fake_body.setAttribute("onload", "move('div')");
    let div_class = "div";


    /* draggable codes */

    // Make the DIV element draggable:
    dragElement(div);

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "div")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "div").onmousedown = dragMouseDown;
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

    /*Elemente özellik verme*/

    div.style.position = "absolute";
    div.style.border = "1px solid white"
    div.style.width = "50px"
    div.style.height = "50px"
    div.setAttribute('class', `${div_class}`);


    /*Header düzenleme kutusunu açan fonksiyon*/
    div.ondblclick = function customize() {
        var customize_body = document.getElementById('feature')
        /*Daha önce düzenleme kutusu açılmış mı kontrol ediyor yok ise açıyor*/
        if (!customize_body) {

            /*Düzenleme kutusunu oluşturma*/

            left_bar.style.marginTop = '300px'
            left_bar.style.height = 'calc(100% - 300px)'
            

            const customize_div = `    <div class="feature" id="feature"><button id="feature-close" class="feature-close"><i class="fa-solid fa-xmark"></i></button><br>
                <div class="group">
                    <p class="feature-font">Width:</p>
                    <input type="text" value="50px" id="width"><br>
                </div>
        
                <div class="group">
                    <p class="feature-font">Height:</p>
                    <input class="font-inp" type="text" value="50px" id="height"><br>
                </div>
        
                <div class="group">
                    <p class="feature-font">Border:</p>
                    <input class="font-inp" type="text" value="1px solid white" id="border"><br>
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

            var widthInput = document.getElementById('width');
            var heightInput = document.getElementById('height');
            var borderInput = document.getElementById('border');
            var bgColorInput = document.getElementById('bg-color');
            var paddingInput = document.getElementById('padding');
            var ClassInput = document.getElementById('class');
            var topInput = document.getElementById('top');
            var leftInput = document.getElementById('left');

            var width = div.style.width;
            var height = div.style.height;
            var border = div.style.border;
            var bgColor = div.style.backgroundColor;
            var padding = div.style.padding;
            var Class = div.className;

            widthInput.value = width;
            heightInput.value = height;
            borderInput.value = border;
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
                fake_body.removeChild(div);
            }

            save_btn.onclick = function () {
                div.style.height = heightInput.value;
                div.style.width = widthInput.value;
                div.style.border = borderInput.value;
                div.style.backgroundColor = bgColorInput.value;
                div.style.padding = paddingInput.value;
                div.setAttribute('class', `${ClassInput.value}`)
                if(topInput.value.trim() != "") {div.style.top = topInput.value;} if(leftInput.value.trim() != "") {div.style.left = leftInput.value;}
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