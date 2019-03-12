# Tip 1 - Mathematically

Note, have a lot of ways to do that, but with this little information this way is good enough.

1. Using a Hash-Map can help a lot! You can use this [dictionary](#hashmap)

2. Remember that we have a few corner cases:
- __100__: 100 can be **cem** or **cento** e um
- __10to19__: Theres no 'cento e dez e um', so be aware!

<a name="hashmap"></a>Dictionary:
```javascript
const literalNumbers = {
    0: 'zero',
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove',
    10: 'dez',
    11: 'onze',
    12: 'doze',
    13: 'treze',
    14: 'quatorze',
    15: 'quinze',
    16: 'dezesseis',
    17: 'dezessete',
    18: 'dezoito',
    19: 'dezenove',
    20: 'vinte',
    30: 'trinta',
    40: 'quarenta',
    50: 'cinquenta',
    60: 'sessenta',
    70: 'setenta',
    80: 'oitenta',
    90: 'noventa',
    100: 'cento',
    200: 'duzentos',
    300: 'trezentos',
    400: 'quatrocentos',
    500: 'quinhentos',
    600: 'seiscentos',
    700: 'setessentos',
    800: 'oitocentos',
    900: 'novecentos'
}
```
