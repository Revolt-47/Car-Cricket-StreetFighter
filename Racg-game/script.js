document.addEventListener('DOMContentLoaded', () => {
    var car = document.querySelector('.car');

    function start() {
        removeAllCoins();
        document.getElementById('points').innerHTML = "00";
        var currentLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left')) || 670;
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                currentLeft += 30; 
            } else if (event.key === 'ArrowLeft') {
                currentLeft -= 30; 
            }

            if (currentLeft <= 310 || currentLeft >= 1010) {
                alert("Car crashed");
                currentLeft = 670; 
                start()
            }

            car.style.left = currentLeft + 'px';    
        });

        function createcoin() {
            var root = document.getElementById('body-div');
            var row = Math.random() * 3 + 1;
            row = Math.floor(row);
            var coin = document.createElement('div');
            coin.innerHTML = 'C';
            coin.id = "coin" + row;
            coin.className = "coin";
            root.appendChild(coin);

            var coins = document.querySelectorAll('.coin');
            coins.forEach(element => {
                var coinval = parseInt(window.getComputedStyle(element).getPropertyValue('bottom')) || 350;

                function decreaseBottomBy20() {
                    coinval -= 20;
                    if (coinval >= 200) {
                        element.style.bottom = coinval + 'px';
                        var height =parseInt(window.getComputedStyle(element).getPropertyValue('height'))
                        var width =parseInt(window.getComputedStyle(element).getPropertyValue('width'))
                        var font = parseInt(window.getComputedStyle(element).getPropertyValue('font-size')) || 10
                        element.style.height = (height + 5) + 'px';
                        element.style.width = ( width + 5) + 'px';
                        element.style.fontSize = (font + 2) + 'px';

              
                if (element.id === 'coin2') {
                    var leftValue = parseInt(window.getComputedStyle(element).getPropertyValue('left')) || 0;
                    element.style.left = (leftValue - 15) + 'px';
                }
     
                if (element.id === 'coin3') {
                    var leftValue = parseInt(window.getComputedStyle(element).getPropertyValue('left')) || 0;
                    element.style.left = (leftValue + 15) + 'px';
                }
                    } else {
       
                var carLeft = parseInt(car.style.left);
                var coinLeft = parseInt(window.getComputedStyle(element).getPropertyValue('left'));
                var distance = carLeft-coinLeft
                if(distance < 0){
                    distance*=-1;
                }
                console.log(distance)
                if (distance <= 110 ) {
                    var pointselement = document.getElementById('points');
                    points = Number(pointselement.innerText);
                    pointselement.innerHTML = points + 20;
                }
      
                        element.remove();
                    }
                 
                }

                setInterval(decreaseBottomBy20, 500);
            });
        }

        setInterval(createcoin, 2000);
    }

    start();

    function removeAllCoins() {
        var coins = document.querySelectorAll('.coin');
        coins.forEach(element => {
            element.remove();
        });
    }
});
