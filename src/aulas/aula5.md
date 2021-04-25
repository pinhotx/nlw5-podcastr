>O que vamos aprender?
 - Finalizar a aplicação
 - Melhorar os controles do Player

> FOCO, PRÁTICA E GRUPO  

>Mão na massa
- Organizada no código
  - playerContext é responsável pela criação do contexto e todo os parâmetros são passados pelo index do Player. 
  - Em uma situação com outros contextos, por exemplo, autenticação, essa prática embaralharia o código e dificultaria manutenção.

>Solução
- Recortar funções, estados e providers, recortar e deixar só a div.
  - Mudar a extensão de PlayerContext para .tsx a fim de poder criar componentes nele.
  - Exportar outro componente:
    - ```tsx
      export function PlayerContextProvider(){
        // Colar as funções recortadas anteriormente aqui
      }
    
    - importar PlayerContextProvider dentro do MyApp
    - Colocar ele ao redor de todo o app
      ```tsx 
      return(
        <PlayerContextProvider>
          <div className={styles.wrapper}>
            <main>
              //...
            </main>
          </div>
        </PlayerContextProvider>
        //Vai dar erro
      )
      ```

     > criar uma PlayList
     - Botões de Next e Previus
     - Botão de aleatório com loop na tag audio
        - Muda estilo quando ativo
     - Botão de Shuffle com



     >Dicas Next Level
     - Software Responsivo
     - PWA - App
     - Tema Dark


      