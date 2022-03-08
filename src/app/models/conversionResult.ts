export class ConversionResult{
    baseCode :String;
    conversionRate :number;
    targetCode : string;


    MapFrom(result){

        this.baseCode = result.base_code;
        this.conversionRate = result.conversion_rate;
        this.targetCode =  result.target_code;

        return this;

    }
}