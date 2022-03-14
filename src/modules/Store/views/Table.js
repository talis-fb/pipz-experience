import { Table as TableComp, Flex, Button } from "tomato";

// <Flex sx={{ ':first-child' }}></Flex>

const avalicao = (props) => { }

export const Table = () => {
  return (
    <div>
    <TableComp 

    sx={{
      "tr:first-child": {
        backgroundColor: 'red'
      },
        color: '#010101'
    }}

      objects={[ 
        {name:'vinho bom', preco: '21'},
        {name:'vinho ok', preco: '22'},
        {name:'uisque', preco: '23'},
        {name:'vinho sei la', preco: '24'},
        {name:'vinhum', preco: '25'},
      ]} 
      config={{
        columns:[{ label: 'Nome', field:'name', value:'name', width:'90' },{ label:'Preço', field:'preco', value:'preco', width:'70' }]
      }}
    />
    <Button>Nova Avaliação</Button>
    </div>
  )
};

