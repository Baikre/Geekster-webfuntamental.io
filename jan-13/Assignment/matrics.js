let array = [[4, 3, 2, 4],
            [9, 1, 5, 6],
            [2, 7, 9, 6],
            [8, 5, 2, 0]];

        var addition = 0;

        for (let i = 0; i < array.length; i++) {

            
        
            for (let j = 0; j < array[i].length; j++) {

               

                if (i == j) {
                   addition = addition + array[i][j]
                }
              
            }

        }
console.log(addition);