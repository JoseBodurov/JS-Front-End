window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;
    const inputDomSelector = {
        genre: document.querySelector('input[name="genre"]'),
        name: document.querySelector('input[name="name"]'),
        author: document.querySelector('input[name="author"]'),
        date: document.querySelector('input[name="date"]')
    };
    const otherDOMSelectors = {
        addBtn : document.getElementById('add-btn'),
        allHitsContainer : document.querySelector('.all-hits-container'),
        savedContainer : document.querySelector('.saved-container'),
        totalLikesContainer : document.querySelector('.likes > p')
    };

    otherDOMSelectors.addBtn.addEventListener('click',addSongHandler);

    function addSongHandler(event){
        event.preventDefault();
        let allInputsAreNonEmpty = Object.values(inputDomSelector)
        .every((input)=> input.value !== '');

        if(!allInputsAreNonEmpty){
            console.log("HAS INVALID");
            return;  
        }

        const{genre,name,author,date} = inputDomSelector;
        const songContainer = createElement('div',otherDOMSelectors.allHitsContainer,'',['hits-info']);
        createElement('img',songContainer,null,null,null,{src: './status/img/img.png'});
        createElement('h2',songContainer,`Genre ${genre.value}`);
        createElement('h2',songContainer,`Name ${name.value}`);
        createElement('h2',songContainer,`Author ${author.value}`);
        createElement('h3',songContainer,`Date ${date.value}`);
        const saveBtn = createElement('button',songContainer,'Save song',['save-btn']);
        const likeBtn = createElement('button',songContainer,'Like song',['like-btn']);
        const deleteBtn = createElement('button',songContainer,'Delete',['delete-btn']);
        likeBtn.addEventListener('click',likeSongHandler);
        deleteBtn.addEventListener('click',deleteSongHandler);
        saveBtn.addEventListener('click',saveSongHandler);
        clearAllInputs();
    }
    function likeSongHandler(){
        this.setAttribute('disabled',true);
        totalLikes++;
        otherDOMSelectors.totalLikesContainer.textContent = `Total Likes: ${totalLikes}`;
    }
    function deleteSongHandler(){
        this.parentNode.remove();
    }

    function saveSongHandler(){
        const songRef = this.parentNode;
        const saveBtn = songRef.querySelector('.save-btn');
        const likeBtn = songRef.querySelector('.like-btn');
       
        //CHANGING FROM ONE SECTION TO ANOTHER:
       
        otherDOMSelectors
        .savedContainer
        .appendChild(songRef);

        saveBtn.remove();
        likeBtn.remove();
    }


    function clearAllInputs(){
    Object.values(inputDomSelector)
    .forEach((input)=>{
        input.value = '';
    })
    }



    function createElement(type,parentNode,content,classes,id,attributes,useInnerHtml){
        const htmlElement = document.createElement(type);
  
        if(content && useInnerHtml){
            htmlElement.innerHTML = content;
        }else{
            if(content && type !== 'input'){
                htmlElement.textContent = content;
            }
            if(content && type === 'input'){
                htmlElement.value = content;
            }
           
        }
    if(classes&&classes.length > 0){
        htmlElement.classList.add(...classes);
    }
    if(id){
        htmlElement.id = id;
    }
    if(attributes){
        for (const key in attributes) {
            htmlElement.setAttribute(key,attributes[key]);
        }
    }
    if (parentNode){
        parentNode.appendChild(htmlElement);
    }
    return htmlElement;
}
}