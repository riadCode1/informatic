"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

export default function DropMenu() {
  return (
    <Dropdown>
      <div className="relative inline-block">
        {/* OFFSET BORDER */}
        <span className="absolute -top-[5px] -left-[5px]  border-t-1 h-1 w-2 border-white pointer-events-none"></span>
        <span className="absolute -top-[5px] -left-[5px]  border-l-1 h-2  border-white pointer-events-none"></span>
        <span className="absolute -bottom-[5px] -left-[5px]  border-b-1 h-2 w-2  border-white pointer-events-none"></span>
        <span className="absolute -bottom-[5px] -left-[5px]  border-l-1 h-2  border-white pointer-events-none"></span>
                <span className="absolute -top-[5px] -right-[5px]  border-t-1 h-1 w-2 border-white pointer-events-none"></span>
        <span className="absolute -top-[5px] -right-[5px]  border-r-1 h-2  border-white pointer-events-none"></span>
                <span className="absolute -bottom-[5px] -right-[5px]  border-b-1 h-1 w-2 border-white pointer-events-none"></span>
        <span className="absolute -bottom-[5px] -right-[5px]  border-r-1 h-2  border-white pointer-events-none"></span>


        <DropdownTrigger>
          <Button
            className="bg-[#232323] border border-[#333333] font-semibold"
            variant="bordered"
          >
            MOST POPULAR
          </Button>
        </DropdownTrigger>
      </div>

      

      <DropdownMenu
        className="uppercase min-w-50 bg-[#232323]"
        aria-label="Static Actions"
      >
        <DropdownItem className="border hover:bg-[#3a3939] my-2 py-2" key="new">
          Most popular
        </DropdownItem>
        <DropdownItem
          className="border hover:bg-[#3a3939] my-2 py-2"
          key="copy"
        >
          best selling
        </DropdownItem>
        <DropdownItem
          className="border hover:bg-[#3a3939] my-2 py-2"
          key="edit"
        >
          latest
        </DropdownItem>
        <DropdownItem
          className="border hover:bg-[#3a3939] my-2 py-2 text-danger"
          key="delete"
          color="danger"
        >
          rarest
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
