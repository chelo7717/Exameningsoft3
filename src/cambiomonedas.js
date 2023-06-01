function cambio(monto) {
    var listacambio=[]
    for(let i=0;i<=monto;i++)
    {
        if(monto%5 == 0){
            listacambio[i]=5
            monto=monto-5
        }else{
            if(monto%2 == 0){
                listacambio[i]=2
                monto=monto-2
            }
            else{
                if(monto%1 == 0){
                    listacambio[i]=1
                    monto=monto-1
                }
                else{
                    if(monto%1 == 0){
                        listacambio[i]=1
                        monto=monto-1
                    }
                    else{
                        if(monto%0.5 == 0){
                            listacambio[i]=0.5
                            monto=monto-0.5
                        }
                        else{
                            if(monto%0.2 == 0){
                                listacambio[i]=0.2
                                monto=monto-0.2
                            }
                        }
                    }
                }
            }
        }
    }
    return listacambio;

  }
export default cambio 