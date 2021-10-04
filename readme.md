### Todlist - React

- React
-  API
-  Modal
- Problemas
- Estatisticas 

![Main UI](https://github.com/juan-20/TodList/blob/main/src/assets/readme/landing-kanban.gif?raw=true "Main UI")

![Kanban](https://github.com/juan-20/TodList/blob/main/src/assets/readme/kanban-landing.PNG?raw=true "Kanban")

![kanban-drag](https://github.com/juan-20/TodList/blob/main/src/assets/readme/drag-kanban.PNG?raw=true "kanban-drag")

# React

Usei o create-react-app com typescprit. Para o css usei o styled components que ajudeou em algumas estilizações, usei tambem o Framer Notion que faz algumas animações e o efeito de drag de alguns components .

#API
Usei o miraje para fazer uma API junto com o front, nes ta api é retornado o valor dos listBox e dentro dela um array com as Tasks cadastradas dentro deste listBox . A estrutura é esta:
`listBox {
    id: string,
    color: string,
    title: string,
    tasks: [
        id: number,
        title: string,
        collumn: string,
    ]
}`

#Modal

Para a criação das tasks e dos listBoxs eu usei a biblioteca "react-modal" que tem pop-ups que já tem várias configurações por padrão. Eles são os formularios usados e fazem com que o fluxo seja mais simples.

# Problemas
Ao fazer Contexts me deparei com um problema que teria que acabou que não consegui arrumar :( . Ao criar uma nova task eu preciso pegar o valor dela e jogar dentro do array de task dentro da listBox. Porém com os conceitos de imutabilidade isso fica mais complicado pois não posso fazer um push dentro do array vazio do tasks. 
 Com isso a  criação das tasks não esta funcionando 
 
 #Estatisticas
######  16 horas  e 23 minutos de desenvolvimento 
###### Arquivo que levou mais tempo para ser feito: taskBox/index.tsx (2 horas e 18 minutos)
###### 7 commits sem usar emoji
###### 3 litros e 600 de chá tomados  
