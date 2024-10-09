import React, { Children, forwardRef, useId, useState } from "react";
import Select, {
  Props as SelectProps,
  components,
  MenuListProps,
} from "react-select";
import { Field, Input, Label, Radio, RadioGroup } from "@headlessui/react";
import { ArrowDown2, CloseCircle, TickSquare, Trash, Add, TruckTime } from "iconsax-react";

interface CustomSelectProps extends SelectProps {
  label?: string;
  required?: boolean;
  error?: string;
}

const MultiSelectBox = forwardRef<any, CustomSelectProps>(
  ({ label, required, error, ...props }, ref) => {
    const id = useId();
    const customStyles = {
      control: (provided: any, state: any) => ({
        ...provided,
        cursor: "pointer",
        borderColor: error
          ? "#D32F2F"
          : state.isFocused
          ? "#6941C6"
          : "#79747E",
        borderRadius: "4px",
        minHeight: "3.5rem",
        minWidth: "3.5rem",
        maxHeight: "3.5rem",
        "&:hover": {
          borderColor: error
            ? "#D32F2F"
            : state.isFocused
            ? "#729CC7"
            : "#E2E8F0",
        },
      }),
      valueContainer: (provided: any) => ({
        ...provided,
        flexWrap: "nowrap",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        "::-webkit-scrollbar": {
          height: "6px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "3px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }),
      placeholder: (provided: any) => ({
        ...provided,
        fontSize: "16px",
        fontWeight: "400",
        color: "#101828",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }),
      dropdownIndicator: (provided: any) => ({
        ...provided,
        color: "#4A5568",
      }),
      menu: (provided: any) => ({
        ...provided,
        borderRadius: "0.5rem",
        boxShadow: "none",
        zIndex: 999999,
      }),
      menuList: (provided: any) => ({
        ...provided,
        padding: "0.5rem",
        border: "1px solid #475467",
        borderRadius: "4px",
        boxShadow: "none",
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        minHeight: "2.75rem",
        backgroundColor: state.isSelected
          ? "#F9F5FF"
          : state.isFocused
          ? "#F9F5FF"
          : "white",
        color: "#333333",
        transition: "background-color 0.3s",
        borderRadius: "0.5rem",
        cursor: "pointer",
        padding: "0.5rem",
        margin: "0.25rem 0",
        borderBottom: "1px solid #F4F5F5",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        "&:last-child": {
          borderBottom: "none",
        },
        "&:hover": {
          backgroundColor: "#E2E8F0",
        },
        "&:active": {
          backgroundColor: "#F9F5FF",
        },
      }),
      multiValue: (provided: any) => ({
        ...provided,
        color: "#333333",
        backgroundColor: "#F4EBFF",
        borderRadius: "30px",
        margin: "2px 4px 2px 0",
      }),
      multiValueLabel: (provided: any) => ({
        ...provided,
        fontSize: "16px",
        fontWeight: "500",
        color: "#101828",
        margin: "0 8px",
      }),
      multiValueRemove: (provided: any) => ({
        ...provided,
        "&:hover": {
          backgroundColor: "transparent",
          color: "#2D3748",
        },
      }),
      clearIndicator: (provided: any) => ({
        ...provided,
        cursor: "pointer",
      }),
    };

    const DropdownIndicator = () => (
      <ArrowDown2 className="text-type-graphite me-2" />
    );

    const MultiValueRemove = (props: any) => (
      <components.MultiValueRemove {...props}>
        <Add
          color="#101828"
          className="size-5 text-type-graphite rotate-45 active:text-type-graphite lg:hover:text-type-graphite transition-colors duration-600 "
        />
      </components.MultiValueRemove>
    );

    const MultiValueLabel = (props: any) => {
      return (
        <components.MultiValueLabel {...props}>
          {/* Customize the label appearance here */}
          <div className="flex items-center">
            <img
              src={require("../assets/images/Frame.png")}
              alt=""
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="text-gray-900">{props.data.label}</span>
            {/* This is where the selected label is rendered */}
          </div>
        </components.MultiValueLabel>
      );
    };

    const ClearIndicator = (props: any) => {
      const isMulti = props.hasValue && props.selectProps.isMulti;

      if (!isMulti) {
        return null;
      }

      return (
        <components.ClearIndicator {...props}>
          <Trash className="size-5 text-type-mist" />
        </components.ClearIndicator>
      );
    };

    const MenuList = (props: any) => {
      const [searchTerm, setSearchTerm] = useState<string>("");
      const selectedOptions = Array.isArray(props.selectProps.value)
        ? props.selectProps.value
        : [];

      const clearSelectedOptions = () => {
        props.selectProps.onChange([], { action: "clear" });
      };

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
      };
      return (
        <components.MenuList {...props}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              maxHeight: "200px",
            }}
          >
            <div
              style={{
                maxHeight: "260px",
                overflowY: "auto",
                padding: "10px 0",
              }}
            >
              {props.children}
            </div>
            <div
              className="fixed-footer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                borderTop: "1px solid #ddd",
                backgroundColor: "white",
                position: "sticky",
                bottom: 0,
              }}
            >
              <span className="text-xs text-gray-900 leading-4">
                Selected: {selectedOptions.length}
              </span>
              {selectedOptions.length > 0 && (
                <button
                  onClick={clearSelectedOptions}
                  className="text-xs text-blue-600 leading-4 cursor-pointer"
                >
                  Clear selected
                </button>
              )}
            </div>
          </div>
        </components.MenuList>
      );
    };

    const Option = (props: any) => {
      return (
        <components.Option {...props}>
          <div className="flex items-center justify-start w-full">
            {props.isSelected ? (
              <TickSquare
                className="text-brand-700 size-7 mr-3"
                variant="Bold"
              />
            ) : null}
            <img
              src={require("../assets/images/Frame.png")}
              alt=""
              width={24}
              height={24}
              className="mr-3"
            />
            <span>
              {props.data.label}/{props.data.id}
            </span>
          </div>
        </components.Option>
      );
    };

    return (
      <div className="relative flex flex-col">
        {label ? (
          <label className="mb-1.5 text-xs md:text-sm text-type-inkwell">
            {label}
            {required && <span className="text-mood-energetic ms-2">*</span>}
          </label>
        ) : null}
        <Select
          {...props}
          ref={ref}
          styles={customStyles}
          closeMenuOnSelect={false}
          components={{
            MenuList,
            DropdownIndicator,
            MultiValueRemove,
            ClearIndicator,
            IndicatorSeparator: () => null,
            Option,
            MultiValueLabel,
          }}
          placeholder="Add Person"
          isMulti
          isSearchable
          isClearable
          hideSelectedOptions={false}
          instanceId={id}
        />
        {error && (
          <span className="text-mood-energetic text-xs mt-1">error{error}</span>
        )}
      </div>
    );
  }
);

MultiSelectBox.displayName = "MultiSelectBox";
export default MultiSelectBox;
