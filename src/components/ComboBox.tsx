import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { CategoryType } from "@/pages/articles/PublishArticle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const article = [
  {
    value: "تاریخی",
    label: "تاریخی",
  },
  {
    value: "فرهنگی",
    label: "فرهنگی",
  },
];

const publichArticle = [
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "13",
    label: "13",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "15",
    label: "15",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "17",
    label: "17",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "19",
    label: "19",
  },
  {
    value: "20",
    label: "20",
  },
];
const visitFee = [
  {
    value: "رایگان",
    label: "رایگان",
  },
  {
    value: "20",
    label: "20 هزار تومان",
  },
];
export default function Combobox({ type }: any) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  let categorys;
  if (type == CategoryType.Article) {
    categorys = article;
  } else if (type == CategoryType.PublishArticle) {
    categorys = publichArticle;
  } else {
    categorys = visitFee;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border-2 rounded-lg"
        >
          {value
            ? categorys.find((category: any) => category.value === value)?.label
            : "دسته بندی را انتخاب کنید"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="دسته بندی را جستجو کنید" />
          <CommandList>
            <CommandEmpty>دسته بندی یافت نشد</CommandEmpty>
            <CommandGroup>
              {categorys.map((category: any) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
