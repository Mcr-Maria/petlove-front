import produto from "../assets/produto.png";
import { Button } from "antd";
const UltimasColetas = () => {
    return ( 
        <div className="mt-101">
            <h6 className="text-roxo text-lg mb-3 font-semibold gap-10">Últimas coletas</h6>
            <div className=" bg-white rounded flex items-center shadow-lg p-2 mb-4">
                <img src={produto} alt="Produto"/>
                <div className="flex-1 leading-4">
                    <h5 className="text-lg">
                        Nome do Produto
                    </h5>
                    <h6 className="text-xs">
                        Preço base: R$ 00,00  
                    </h6>
                    <h6 className="text-xs">
                        Preço coletado: R$ 00,00                    
                    </h6>
                </div>
                <span className="text-green-500 font-bold">+8%</span>
            </div>

            <div className=" bg-white rounded flex items-center shadow-lg p-2 mb-4 ">
                <img src={produto} alt="Produto"/>
                <div className="flex-1 leading-4">
                    <h5 className="text-lg">
                        Nome do Produto
                    </h5>
                    <h6 className="text-xs">
                        Preço base: R$ 00,00                    
                    </h6>
                    <h6 className="text-xs">
                        Preço coletado: R$ 00,00                    
                    </h6>
                </div>
                <span className="text-green-500 font-bold">+25.1%</span>
            </div>

            <div className=" bg-white rounded flex items-center shadow-lg p-2 ">
                <img src={produto} alt="Produto"/>
                <div className="flex-1 leading-4">
                    <h5 className="text-lg">
                        Nome do Produto
                    </h5>
                    <h6 className="text-xs">
                        Preço base: R$ 00,00                    
                    </h6>
                    <h6 className="text-xs">
                        Preço coletado: R$ 00,00                    
                    </h6>
                </div>
                <span className="text-vermelho font-bold">-6.1%</span>
            </div>            
            <div className="text-center">
                        <Button shape="round" size="large" className="w-[150px] mt-6" type="primary"> Ver todas </Button>
                    </div>

        </div>
);
}

export default UltimasColetas;