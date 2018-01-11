# ch 1 Python 数据类型

import collections

Card = collections.namedtuple('Card', ['rank', 'suit'])

class FrenchDeck:
    ranks = [str(n) for n in range(2, 11)] + list('JQKA')
    suits = 'spades diamonds clubs hearts'.split()

    def __init__(self):
        self.cards = [Card(rank, suit) for suit in self.suits
                                       for rank in self.ranks]

    def __len__(self):
        return len(self._cards)

    def __getitem__(self,  prosition):
        return self._cards[position]

#ch 2 xulie


>>> symbols = '$%^&*&*'
>>> codes = []
>>> for symbol in symbols:
	codes.append(ord(symbol))

	
>>> codes
[36, 37, 94, 38, 42, 38, 42]
>>> 


>>> colors = ['black', 'white']
>>> sizes = ['S', 'M', 'L']
>>> tshirts = [(color, size) for color in colors for size in sizes] ➊
>>> tshirts
[('black', 'S'), ('black', 'M'), ('black', 'L'), ('white', 'S'),
('white', 'M'), ('white', 'L')]
>>> for color in colors: ➋
... for size in sizes:
... print((color, size))
...
('black', 'S')
('black', 'M')
('black', 'L')
('white', 'S')
('white', 'M')
('white', 'L')
>>> tshirts = [(color, size) for size in sizes ➌
... for color in colors]
>>> tshirts
[('black', 'S'), ('white', 'S'), ('black', 'M'), ('white', 'M'),
('black', 'L'), ('white', 'L')]


#_fields 属性是一个包含这个类所有字段名称的元组。
# 


#list tuple str   => 切片


board = [['_'] * 3 for i in range(3)]

board = []
for i in range(3):
    row=['_'] * 3
    board.append(row)

>>> board
[['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]
>>> board[2][0] = 'X'
>>> board
[['_', '_', '_'], ['_', '_', '_'], ['X', '_', '_']]



 #引用

weird_board = [['_'] * 3] * 3 

row=['_'] * 3
board = []
for i in range(3):
board.append(row)

>>> weird_board = [['_'] * 3] * 3 
>>> weird_board
[['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]
>>> weird_board[1][2] = 'O' 
>>> weird_board
[['_', '_', 'O'], ['_', '_', 'O'], ['_', '_', 'O']]



# Python 的排序算法——Timsort——是稳定的，意思是就算两个元素比不出大小，在每次排序的
# 结果里它们的相对位置是固定的

