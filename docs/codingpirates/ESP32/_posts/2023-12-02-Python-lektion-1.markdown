---
  title: Første lektion i Python
  layout: single
#  tags: ESP32 microPython
---

## Indledning

For at blive god til at programmere i et sprog, er der lige nogle grundlæggende ting man skal vide, så man kan skrive et program computeren kan forstå.  Du vil opdage at alle programmeringssprog har de samme ting, men at de bare skal skrives på forskellig måde.

## Variable

En variabel er et sted hvor programmet kan gemme noget information til senere.

### Opret en variabel

Her er eksempler på variable:

```python
min_int = 0            # heltal
MinFloat = 0.0         # decimaltal
min_list = [1,2,3]     # liste (array/list)
_min_dict = { 'a':'b',
                'x':2 }  # ordbog (dictionary)
min_bool = True        # sand/falsk (Boolean)

print(min_int, MinFloat, min_list, _min_dict)
```

Og her en variabel der kombinerer det hele:

    _minKomplekse_123_Var = ['a', 1, 0.0, [1,2,3], {'x':'vuf'}]

### Ændring af en variabel

Vi skal også kunne ændre en variabel.  Her er nogle eksempler:

```python
min_int = 3
min_list[0] = 4        # Bliver til [4,2,3]
min_list.append(5)     # bliver til [4,2,3,5]
_min_dict['a'] = 'c'   # bliver til { 'a':'c', 'x':2 }
_min_dict['f'] = 'ny'  # bliver til { 'a':'c', 'x':2, 'f':'ny' }

print(min_int, MinFloat, min_list, _min_dict)
```

Der er rigtig mange ekstra funktioner der virker på lister og dictionaries, da de bruges _rigtig_ ofte.

## Kontrol

Alle programmer har brug for at kontrollere hvad der sker.  Det sker med 'spørgsmål' og 'løkker'.  I Python hedder de mest brugte `if`, `for`, `while`.

### if

`if`bruges til at teste værdier og så forgrene programmet.  Eksempel:

```python
if min_int == 3:
    print(min_int)
elif min_list[1] ==8:
    print("Hov?")
else:
    print("Det var mærkeligt?!")
```

### for

En `for`-løkke kører de samme linjer kode et forudbestemt antal gange.  I eksemplerne bruges `range(<fra>, <til+1>)` til at lave en talsekvens, og `items()` på en dictionary som giver _to_ værdier tilbage: nøgle og værdi.

```python
for x in range(0,10):
    print(f"{x} ")

# printer: 0 1 2 3 4 5 6 7 8 9 (på hver sin linje)

d = { 'a':1, 'b':2, 'c':3}
for k,v in d.items():
    # bemærk end="" -> der skiftes ikke linje efter hver udskrift her.
    print("%s -- %i : " % (k, v), end="")

# printer: a -- 1 : b -- 2 : c -- 3 :
```

### while

En `while`-løkke fortsætter indtil en test bliver falsk.  Hvis noget skal fortsætte uendeligt, bruger vi typisk en `while True:` løkke.

```python
i = 0
r = 32
while i < r:
    i += 1
    r -= 2
    print(i, end=" - ")

# printer: 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 -
```

### Funktioner

Funktioner starter altid med `def`.  En funktion er en indpakning af noget programkode. Den behøver ikke at returnere en værdi med `return`.

```python
def funktion(a, b="hej"):
    a = a + 10
    return f"{b}:{a}"

# printer: hej:10
print(funktion(0))
y = funktion(10, "bananer")
# printer: bananer:20
print(y)
```
### Klasser  

En Python-klasse starter altid med `class`.  Se også [her](/codingpirates/esp32/microPython-programstruktur)

```python
# En klasse _A_
class A():
    def __init__(self, x):
        self.x = x

    def out(self):
        print(self.x)

class B(A):
    y = "y"
    
    def update(self, val):
        self.x = val
        
    def add(self, val=10):
        return self.x + val

a = A(4)
b = B(10)

a.out() # 4
b.update(5) # 5
b.out() # 5
b.add() # 20 (men b.x er stadig 5!)
b.out() # 5
b.update(b.add(100)) # b.x = 105
b.out() # 105
```

## Prøv det

<iframe frameborder="0" width="100%" height="400px" src="https://create.withcode.uk/embed/PdH"><a target="_blank" href="https://create.withcode.uk/python/PdH">create.withcode.uk</a></iframe>