interface SelectFilterProps{
    name:string;
    options:string[];
    value?:string;
    onChange: (value:string) => void;
}