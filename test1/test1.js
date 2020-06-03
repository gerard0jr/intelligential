let myArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]
  
  let newArray = []
  
  //longitudes del arreglo
  let n = myArray[0].length
  let m = myArray.length
  
  //Apuntador del arreglo
  let myPointer = {
      m: 0,
      n: 0
  }
  
  //Límites
  let myBoundaries = {
      left: 0,
      right: n - 1, //3
      top: 0,
      bottom: m - 1 //2
  }
  
  //Dirección de recorrido
  let myDirection = 'right'
  
  let caracol = (array, pointer, boundaries, direction) => {
    //Caso de arreglo 1x1    
      if(n === 1 && m === 1) return array[0]

      if(direction === 'right'){
        // ¿Llegamos al límite? 
          if(pointer.n === boundaries.right){
            //   Estamos en el límite, podemos cambiar de dirección? 
              if(boundaries.bottom - boundaries.top <= 0){
                //  No, acabó la iteración, añadimos a este último elemento
                newArray.push(array[pointer.m][pointer.n])
                return newArray
              }
              //    Podemos cambiar de dirección, nuestro límite cambia
              direction = 'down'
              boundaries.top = boundaries.top + 1
          }
          else{
              //  Aún no llegamos al límite, agregamos éste elemento y apuntamos al siguiente elemento en esta dirección
              newArray.push(array[pointer.m][pointer.n])
              pointer.n = pointer.n + 1
          }
      }
      if(direction === 'down'){
          if(pointer.m === boundaries.bottom){
              if(boundaries.right - boundaries.left <= 0){
                newArray.push(array[pointer.m][pointer.n])
                return newArray
              }
              direction = 'left'
              boundaries.right = boundaries.right - 1
          }
          else{
              newArray.push(array[pointer.m][pointer.n])
              pointer.m = pointer.m + 1
          }
      }
      if(direction === 'left'){
          if(pointer.n === boundaries.left){
              if(boundaries.bottom - boundaries.top <= 0){
                newArray.push(array[pointer.m][pointer.n])
                return newArray
              }
              direction = 'up'
              boundaries.bottom = boundaries.bottom - 1
          }
          else{
              newArray.push(array[pointer.m][pointer.n])
              pointer.n = pointer.n - 1
          }
      }
      if(direction === 'up'){
          if(pointer.m === boundaries.top){
              if(boundaries.right - boundaries.left <= 0){
                newArray.push(array[pointer.m][pointer.n])
                return newArray
              }
              direction = 'right'
              boundaries.left = boundaries.left + 1
          }
          else{
              newArray.push(array[pointer.m][pointer.n])
              pointer.m = pointer.m - 1
          }
      }
    //  Función recursiva
      return caracol(array, pointer, boundaries, direction)
  }
  
  //    Llamado a función
  caracol(myArray, myPointer, myBoundaries, myDirection)