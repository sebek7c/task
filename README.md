Zadanie polega na stworzeniu prostego widoku produktów oraz koszyka na jednej stronie. Całość składa się z dwóch części:
a) Grid z produktami.
b) Koszyk zakupowy.

Wytyczne:
a) Projekt musi działać prawidłowo na wszystkich popularnych przeglądarkach.
b) Grid produktów oraz koszyk zakupowy powinny być responsywne.
c) Przedmioty do wyświetlenia w grid znajdują się w pliku items.json i mają następujące właściwości:
- id
- tytuł
- okładka (URL)
- cena
- dostępność
- waluta
d) Przedmioty w koszyku powinny wyświetlać 2 dodatkowe informacje:
- ilość
- wartość (cena * ilość)
e) Każdy dostępny przedmiot można dodać do koszyka za pomocą przycisku "Add to cart".
f) Dodanie istniejącego przedmiotu do koszyka powinno zwiększać jego ilość.
g) Powinno dać się usunąć każdą pozycję z koszyka.
h) W koszyku powinna znajdować się aktualna wartość przedmiotów.

Stack:
- React 16+
- Redux / Redux Toolkit
- SCSS
