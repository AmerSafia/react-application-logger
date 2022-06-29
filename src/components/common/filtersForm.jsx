import React from 'react';
import { Input } from './input';
import SelectMenu from './selectMenu';

const FiltersForm = ({ setFieldValue, searchLogger, constantData, handleSearchLogger }) => {
    const getSelectOptionByKey = (key) => {
        const options = constantData.map(data => data[key] ?? '').filter(item => item !== '')
        return [...new Set(options)]
    }

    return (
        <form className="row">
            <Input
                type="text"
                placeholder="e.g. Admin.User"
                label="Employee Name"
                name="employee"
                onSetInput={setFieldValue}
                value={searchLogger["employee"]}
            />
            <SelectMenu
                label="Action type"
                options={getSelectOptionByKey('actionType')}
                name="action"
                onSelectedValue={setFieldValue}
                value={searchLogger["action"]}
            />
            <SelectMenu
                label="Application Type"
                options={getSelectOptionByKey('applicationType')}
                name="application"
                value={searchLogger["application"]}
                onSelectedValue={setFieldValue}
            />
            <Input
                type="date"
                placeholder="Select date"
                label="From Date"
                name="fromDate"
                onSetInput={setFieldValue}
                value={searchLogger["fromDate"]}
            />
            <Input
                type="date"
                placeholder="Select date"
                label="To Date"
                name="toDate"
                onSetInput={setFieldValue}
                value={searchLogger["toDate"]}
            />
            <Input
                type="text"
                placeholder="e.g.219841/2021"
                label="Application ID"
                name="applicationID"
                onSetInput={setFieldValue}
                value={searchLogger["applicationID"]}
            />
            <div className="col d-flex align-items-end ">
                <button
                    type="submit"
                    className=" btn btn-primary btn-sm"
                    onClick={handleSearchLogger}
                >
                    <div>Search Logger</div>
                </button>
            </div>
        </form>)
}


export default FiltersForm;