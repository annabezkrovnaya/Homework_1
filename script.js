/*Задание №1. ECMAScript 5. Основы
Дан массив размера N. Отсортируйте его по возрастанию методом "Быстрой
сортировки."*/

function quickSort(array, leftPoint, rightPoint) {

   var index;

   if (array.length > 1) {
        //for call with and without left and right parameters
        leftPoint = typeof leftPoint != "number" ? 0 : leftPoint;
        rightPoint = typeof rightPoint != "number" ? array.length - 1 : rightPoint;

        index = devideArrayElements(array, leftPoint, rightPoint);
        if (leftPoint < index - 1) {
            quickSort(array, leftPoint, index - 1);
        }
        if (index < rightPoint) {
            quickSort(array, index, rightPoint);
        }
    }
    return array;
   }

  //devides to subarrays by supporting element
   function devideArrayElements(arr1, leftPoint, rightPoint) {
      var support = arr1[Math.floor((rightPoint + leftPoint) / 2)];
      i = leftPoint;
      j = rightPoint;

      while (i <= j) {
        while (arr1[i] < support) {
            i++;
        }
        while (arr1[j] > support) {
            j--;
        }
        if (i <= j) {
            replaceArrayElements(arr1, i, j);
            i++;
            j--;
        }
    }
    return i;
   }

   //replaces elements into array
   function replaceArrayElements(arr2, index1, index2){
      var temp = arr2[index1];
      arr2[index1] = arr2[index2];
      arr2[index2] = temp;
   }

var array1 = [5,3,8,1,4,6,2,7];
console.log(quickSort(array1)); //[1,2,3,4,5,6,7,8]

var array2 = [5,8,12,4,42,21,33];
console.log(quickSort(array2)); //[4,5,8,12,21,33,42]

var array3 = [1,3,5,7,3,8,7,5,3,1,4,2];
console.log(quickSort(array3)); //[1,1,2,3,3,3,4,5,5,7,7,8]

var array4 = [5, -5, -7, 3, 7, -3];
console.log(quickSort(array4)); //[-7,-5,-3,3,5,7]
