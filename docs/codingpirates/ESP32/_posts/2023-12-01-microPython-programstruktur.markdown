---
  title: microPython og et programs struktur
  layout: single
#  tags: ESP32 microPython
---

## Strukturen i et procedurelt program

Ethvert procedurelt program følger en bestemt struktur. _Procedurelt_ betyder bare at programmet består af et hovedprogram der kalder en række funktioner og køres den ene linje efter den anden.  Funktioner er en metode til at dele programmet op i mindre dele.  En anden metode er `Objektorienteret`, og beskrives nedenfor.

![Et procedurelt programs struktur](/assets/images/2023-12-01-microPython-programstruktur/image-1.drawio.svg){:style="float: right;"}

Først kommer `import` hvor biblioteker hentes ind.

Så kommer konstanter.  Det er bare variable vi ikke vil ændre på i løbet af programmet.

Så er der globale variable.  Det er variable der kan bruges overalt i programmet, også inde i funktioner.

Så kommer alle funktioner.  En funktion skal være defineret inden den bruges.

Endelig kommer selve programmet, der bruger funktioner, variable og konstanter

### Eksempel på procedurelt program

```python
# importerede biblioteker
import time

# konstanter
ONE_HOUR_IN_SECONDS = 60*60

# globale variable
is_ok = False

# funktioner
def update_global_is_ok(status):
    global is_ok  # fortæller at vi vil opdatere en global variabel
    is_ok = status

# hovedprogram
print(f"Hovedprogram er ok? {is_ok}")
update_global_is_ok(True)
print(f"Hovedprogram er ok? {is_ok}")
```

programmet printer:

```
Hovedprogram er ok? False
Hovedprogram er ok? True
```

## Strukturen i et opjektorienteret program (OOP)

Et objektorienteret program ligner mere den måde den virkelige verden fungerer.  Et objekt er samlet i `klasser` (Python `class`), og en klasse indeholder alt der skal til for at håndtere objektets data og funktioner.

![Et objektorienteret programs struktur](/assets/images/2023-12-01-microPython-programstruktur/image-2.drawio.svg){:style="float: right;"}

Først kommer `import` hvor biblioteker hentes ind.

Så kommer konstanter.  Men kun til brug i hovedprogrammet.

Så er der globale variable. Men kun til brug i hovedprogrammet.

Så kommer alle klasserne.  En klasse indeholder alt der skal bruges til at håndtere data og funktion for et eller andet.

Endelig kommer selve programmet, der kan bruge funktioner, variable og konstanter, men i OOP 'blot' laver en instans af en eller flere klasser, og starter derfra.  I rigtig OOP er alt en klasse, også hovedprogrammet.

### Eksempel på et OOP program

Tænk på en æggekoger. Den har følgende egenskaber:

* der kan være et antal æg i den
* den kan være tændt eller slukket
* den kan være med vand eller uden vand, og vandet kan oven i købet være et sted imellem fuld og tom
* den kan have en timer
* den kan have en indstilling til smilende, blødkogt og hårdkogt æg

Vi kan også have en eller flere æggekogere.

Lad os omsætte noget af det til OOP

```python
# imports - ingen i det her eksempel
# konstanter - ingen
# globale variable - ingen

class EggBoiler():  # det er en god idé at skrive klassenavne med StoreNavne
  # Initialisering af klassevariable
  # Klassevariable deles mellem alle instanser af klassen,
  # så hvis du ændrer EggBoiler.max_eggs = 20, så vil alle instanser af
  # EggBoiler kunne have 20 æg.
  # Hvis du ændrer en instans af klassen, vil kun denne instans ændre sig dog...
  # Angiv en 'privat' variabel med _ først (den er ikke hemmelig dog, bare en navnekonvention)
  _my_internal_variable = True
  # En klassevariabel med det maksimale antal æg en æggekoger kan klare
  max_eggs = 10

  def __init__(self, placement):
    # kaldes en `constructor`.  Den køres automatisk når en `instans` oprettes.
    # her initialiseres instansvariable: navnet på æggekogeren
    self.place = placement
    self.on_off = "off"

  def turn_on(self):
    # funktion til at tænde for æggekogeren
    # den ændrer på instansvariablen "on_off"
    self.on_off = "on"

# hovedprogram.  Opret to æggekogere og tænd dem.
eggboiler_1 = EggBoiler("Home")
eggboiler_2 = EggBoiler("Restaurant")

eggboiler_1.turn_on()
eggboiler_2.turn_on()
# flyt den ene æggekoger fra restauranten til hotellet
eggboiler_2.place = "Hotel"
```

### Et eksempel med klassevariable

```python
>>> class A():
    x = 0

# To instanser af klassen A:    
>>> a=A()
>>> b=A()

# værdien af x er som forventet 0
>>> a.x
0
>>> b.x
0

# Vi ændrer klassevariablen A.x
>>> A.x=1

# værdien er nu 1 på begge instanser!
>>> a.x
1
>>> b.x
1

# Vi ændrer klassevariablen på instansen a:
>>> a.x=2

# Hov, klassevariablen er nu blevet til en instansvariabel!
>>> a.x
2
>>> b.x
1

# Vi ændrer klassevariablen på klassen igen
>>> A.x=3

# instansen a er stadig den samme, men b er ændret som forventet
>>> a.x
2
>>> b.x
3
>>> 
```

Et godt råd er derfor at undgå at ændre i klassevariable i instanser af klassen, da det kan være temmelig forvirrende at holde rede på om en instans har lavet en ændring, mens andre instanser deler samme klasse-variabels værdi.

# Hvad er 'bedst'?

Det kommer an på!  Hvis dit program er simpelt og bare skal skrives og køre, er procedurelle programmer langt det nemmeste.  Du skriver bare et hele i én køre, og laver funktioner hvis det giver mening at sætte dele af koden for sig selv, f.eks. fordi den skal køres mange gang forskellige steder, eller fordi det gør et nemmere at forstå programmet.

Procedurelle programmer kan organiseres som OOP ved at dele det op i filer og have 'grænseflader' og datastrukturer kun til brug for en bestemt gruppe af funktioner.

Nok langt det meste "embedded kode" i verden er skrevet procedurelt i C på denne måde.  Det er bare lidt gammeldags, og C++ tilføjer OOP til 'C'.

Hvis programmet vokser lidt efter lidt, modellerer noget virkeligt, skal have en aftale grænseflade, eller skal være nemmere at udvide, er OOP som regel bedre og mere moderne.  Med OOP indkapsler du alle funktioner og data der hører til den samme 'ting', så hvis den skal kunne mere, er det kun her der skal ændres.
