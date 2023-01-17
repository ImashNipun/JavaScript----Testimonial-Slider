var image = document.querySelector('#p-img');
var pName = document.querySelector('.p-name');
var pReview = document.querySelector('.review');


var imgList = ['./images/p01.jpg','./images/p02.jpg','./images/p03.jpg'];
var pNameList = ['Person01','Person02','Person03'];
var pReviewList = ['"I am a web developer myself and I can say without a doubt that M Afzaal Afzal is a talented frontend web developer. He has a great understanding of how the web works and uses that knowledge to create amazing and functional websites.I 100% recommend him if you are looking for a talented and knowledgeable frontend web developer."',
                    '"It was great experience while working with him. He is really a gem. We have worked with a project using react bricks to create a webflow clone like website and this person really made our day. I really appreciate his efforts. Thanks a lot for your good work."',
                    '"Seller is attentive to my requirements and has the ability to compose abstract UI compositions with CSS, javascript animation, Gatsby and other components. Seller is technically proficient provides good value for his pricing."'];

var btnBack = document.querySelector('.btn-back');
var btnForward = document.querySelector('.btn-front');
var i = 0;

function setDetails(index){
    image.style.backgroundImage = "url("+imgList[index]+")";
    pName.textContent = pNameList[index];
    pReview.textContent = pReviewList[index];
}

addEventListener('load',(e) =>{
    setDetails(0);
})

addEventListener('click', (e) => {

    if(e.target.name == 'forward-button'){
        if(i==imgList.length-1){
                i=0;
                setDetails(i);
            }else{
                i++;
                setDetails(i);
            }
    }

    if(e.target.name == 'back-button'){
        if(i==0){
            i = imgList.length-1;
            setDetails(i);
        }else{
            i--
            setDetails(i);
        }
    }
    
})