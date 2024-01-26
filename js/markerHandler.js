AFRAME.registerComponent('markerHandler', {
    init: async function(){
        console.log('Hello World')
        this.el.addEventListener('markerFound', ()=>{
            console.log('Marker is Found');
            this.handleMarkerFound();
        })
        this.el.addEventListener('markerLost', ()=>{
            console.log('Marker is Lost');
            this.handleMarkerLost();
        })
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById('button-div');
        buttonDiv.style.display = 'flex';
        var ratingButton = document.getElementById('rating-button');
        var orderButton = document.getElementById('order-button');
        ratingButton.addEventListener('click', function(){
            swal({
                icon : 'warning',
                title : 'rate dish',
                text : 'work In Progress'
            })
        })
        orderButton.addEventListener('click',()=>{
            swal({
                icon : 'https://i.imgur.com/4NZ6uLY.jpg',
                title : 'Thanks for Order!',
                text : 'Your order will be served soon'
            })
        })
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById('button-div');
        buttonDiv.style.display = 'none';
    }
})