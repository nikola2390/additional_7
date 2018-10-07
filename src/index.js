module.exports = function solveSudoku(mat) {
  for (let i = 0; i < 9; i++) {  // поиск пустых ячеек и вставка массива
    for (let j = 0; j < 9; j++) {
      if (mat[i][j] === 0) {
        mat[i][j] = [1,2,3,4,5,6,7,8,9];
      }
    }
  }

  for (let hh = 1; hh < 10; hh++) {
    for (let ii = 1; ii < 30; ii++) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (typeof mat[row][col] === "object") {
            let arr = [];
            for (let j = 0; j < 9; j++) {
              if (typeof mat[row][j] === "number" && !arr.includes(mat[row][j])) {
                arr.push(mat[row][j]);
              }
            }
            for (let i = 0; i < 9; i++) {
              if (typeof mat[i][col] === "number" && !arr.includes(mat[i][col]))
              {
                arr.push(mat[i][col]);
              }
            }
            let k = Math.floor(row / 3) * 3;
            let l = Math.floor(col / 3) * 3;
            for (let a = k; a < k + 3; a++) {
              for (let b = l; b < l + 3; b++) {
                if (typeof mat[a][b] === "number" && !arr.includes(mat[a][b])) {
                  arr.push(mat[a][b]);
                }
              }
            }
            mat[row][col] = mat[row][col].filter (
              x => !arr.includes(x)
            );
          }
        }
      }
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (mat[row][col].length == 1) {
            mat[row][col] = mat[row][col][0];
          }
        }
      }
    }
    for (let row = 0; row < 9; row++) {
      let tmpArr = [];
      let tmpArray = [];
      for (let col =0; col < 9; col++) {
        if (typeof mat[row][col] === "object") {
          tmpArr = tmpArr.concat(mat[row][col]);
        }
      }
      for (let i = 1; i < 10; i++) {
        if (tmpArr.includes(i) && tmpArr.indexOf(i) === tmpArr.lastIndexOf(i)) {
          tmpArray.push(i);
        }
      }
      for (let col = 0;col < 9; col++) {
        if (typeof mat[row][col] === "object") {
          let cell = mat[row][col];
          for (let k = 0; k < tmpArray.length; k++) {
            if (cell.includes(tmpArray[k])) {
              mat[row][col] = tmpArray[k];
            }
          }
        }
      }
    }
    for (let ii = 2; ii < 30; ii++) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (typeof mat[row][col] === "object") {
            let arr = [];
            for (let j = 0; j < 9; j++) {
              if (typeof mat[row][j] === "number" && !arr.includes(mat[row][j])) {
                arr.push(mat[row][j]);
              }
            }
            for (let i = 0; i < 9; i++) {
              if (typeof mat[i][col] === "number" && !arr.includes(mat[i][col]))
              {
                arr.push(mat[i][col]);
              }
            }
            let k = Math.floor(row / 3) * 3;
            let l = Math.floor(col / 3) * 3;
            for (let a = k; a < k + 3; a++) {
              for (let b = l; b < l + 3; b++) {
                if (typeof mat[a][b] === "number" && !arr.includes(mat[a][b])) {
                  arr.push(mat[a][b]);
                }
              }
            }
            mat[row][col] = mat[row][col].filter (
              x => !arr.includes(x)
            );
          }
        }
      }
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (mat[row][col].length == 1) {
            mat[row][col] = mat[row][col][0];
          }
        }
      }
    }
    for (let col = 0; col < 9; col++) {
      let tmpArr = [];
      let tmpArray = [];
      for (let row =0; row < 9; row++) {
        if (typeof mat[row][col] === "object") {
          tmpArr = tmpArr.concat(mat[row][col]);
        }
      }
      for (let i = 1; i < 10; i++) {
        if (tmpArr.includes(i) && tmpArr.indexOf(i) === tmpArr.lastIndexOf(i)) {
          tmpArray.push(i);
        }
      }
      for (let row = 0;row < 9; row++) {
        if (typeof mat[row][col] === "object") {
          let cell = mat[row][col];
          for (let k = 0; k < tmpArray.length; k++) {
            if (cell.includes(tmpArray[k])) {
              mat[row][col] = tmpArray[k];
            }
          }
        }
      }
    }  
    for (let ii = 3; ii < 30; ii++) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (typeof mat[row][col] === "object") {
            let arr = [];
            for (let j = 0; j < 9; j++) {
              if (typeof mat[row][j] === "number" && !arr.includes(mat[row][j])) {
                arr.push(mat[row][j]);
              }
            }
            for (let i = 0; i < 9; i++) {
              if (typeof mat[i][col] === "number" && !arr.includes(mat[i][col]))
              {
                arr.push(mat[i][col]);
              }
            }
            let k = Math.floor(row / 3) * 3;
            let l = Math.floor(col / 3) * 3;
            for (let a = k; a < k + 3; a++) {
              for (let b = l; b < l + 3; b++) {
                if (typeof mat[a][b] === "number" && !arr.includes(mat[a][b])) {
                  arr.push(mat[a][b]);
                }
              }
            }
            mat[row][col] = mat[row][col].filter (
              x => !arr.includes(x)
            );
          }
        }
      }
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (mat[row][col].length == 1) {
            mat[row][col] = mat[row][col][0];
          }
        }
      }
    }
    for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let tmpArr = [];
      let tmpArray = [];
      for (let y = 3 * row; y < 3*row+3; y++) {
        for (let x = 3*col; x < 3*col+3; x++) {
        if (typeof mat[x][y] === "object") {
          tmpArr = tmpArr.concat(mat[x][y]);
        }
      }
      }
      for (let i = 1; i < 10; i++) {
        if (tmpArr.includes(i) && tmpArr.indexOf(i) === tmpArr.lastIndexOf(i)) {
          tmpArray.push(i);
        }
      }
      for (let y = 3*row;y < 3*row+3; y++) {
        for (let x = 3*col; x < 3*col+3; x++) {
        if (typeof mat[x][y] === "object") {
          let cell = mat[x][y];
          for (let k = 0; k < tmpArray.length; k++) {
            if (cell.includes(tmpArray[k])) {
              mat[x][y] = tmpArray[k];
            }
          }
        }
        }
        }
      }
    }
    for (let ii = 4; ii < 30; ii++) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (typeof mat[row][col] === "object") {
            let arr = [];
            for (let j = 0; j < 9; j++) {
              if (typeof mat[row][j] === "number" && !arr.includes(mat[row][j])) {
                arr.push(mat[row][j]);
              }
            }
            for (let i = 0; i < 9; i++) {
              if (typeof mat[i][col] === "number" && !arr.includes(mat[i][col]))
              {
                arr.push(mat[i][col]);
              }
            }
            let k = Math.floor(row / 3) * 3;
            let l = Math.floor(col / 3) * 3;
            for (let a = k; a < k + 3; a++) {
              for (let b = l; b < l + 3; b++) {
                if (typeof mat[a][b] === "number" && !arr.includes(mat[a][b])) {
                  arr.push(mat[a][b]);
                }
              }
            }
            mat[row][col] = mat[row][col].filter (
              x => !arr.includes(x)
            );
          }
        }
      }
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (mat[row][col].length == 1) {
            mat[row][col] = mat[row][col][0];
          }
        }
      }
    }
  }
  return mat;
}
