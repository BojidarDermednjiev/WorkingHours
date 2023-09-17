import { Input } from "@material-tailwind/react";
 
export default function InputDefault({label}) {
  return (
    <div className="w-full">
      <Input label={label} variant="outlined" size="lg"/>
    </div>
  );
}