# bot
## api:
   https://vknode.godos.ru/graphql?query=%0A{%0A%20%20users%20{%0A%20%20%20%20first_name%0A%20%20%09last_name%0A%20%20%20%20sex%0A%20%20%20%20age%0A%20%20}%0A} - вывод по параметрам через graphql
   https://vknode.godos.ru/addfriends - добавить 10000 друзей в бд
   https://vknode.godos.ru/removefriends - удалить всех друзей из бд

Из минусов: 
- добавление 10000 друзей сделал топорным способом (добавляет друзей по айди и всех друзей их друзей)
