let cars = ['Toyota', 'Lada', 'Ferarri', 'Jeep']

let ul = document.querySelector('ul')

let app = {
	search_car: '',
	searchCar(e){
		this.search_car = e.target.value
		this.render()
	},
	removeCar(li, index){
		let a = document.createElement('a')
		li.appendChild(a)
		a.innerHTML = '&times;'
		a.addEventListener('click', () => {
			cars.splice(index, 1)
			this.render()
		})


	},
	new_car:{
		name: '',
		getName(e){
			this.name = e.target.value
		},
		pushName(e){
			e.preventDefault()
			if(this.name){
				cars.push(this.name)
				e.target.querySelector('input').value = ''
				this.name = ''
				app.render()
			}
		}
	},
	render(){
		ul.innerHTML = ''
		if(cars.length==0){
			ul.innerHTML = 'No cars available'
		}
		else{
			cars.map((item, index) => {
				if(this.search_car){
					if(item.toLowerCase().indexOf(this.search_car.toLowerCase()) != -1){
						let li = document.createElement('li')
						li.innerHTML = item
						ul.appendChild(li)
						this.removeCar(li, index)
					}
				}
				else{
					let li = document.createElement('li')
					li.innerHTML = item
					ul.appendChild(li)
					this.removeCar(li, index)
				}
			})
		}
	},
	run(){
		this.render()
	}
}

app.run()
