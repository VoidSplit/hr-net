import Table from '../components/Table'
import SearchBar from '../components/SearchBar';
import './styles/tableLayout.css'
import store from '../redux/store';
import { SelectMenu } from 'voidsplit_select_component'
import Label from '../components/Label';
export default function TableLayout({refreshPagination, handleActions, page, entries, list}) {
    console.log(store.getState().entries.toString())
    const datasetSizeOptions = [
        {
            type: "item",
            display: "10",
            abbreviation: "10"
        },
        {
            type: "item",
            display: "15",
            abbreviation: "15"
        },
        {
            type: "item",
            display: "20",
            abbreviation: "20"
        }
    ]
    return (
        <>
            <div className="parameter-bar">
                <div className="select-wrap">
                    <Label display={"Rows"} isFor={"sizeoption"}/>
                    <SelectMenu id="sizeoption" data={datasetSizeOptions} />
                </div>
                <SearchBar id="search" label="Search"/>
            </div>
            <Table refreshPagination={refreshPagination} handleActions={handleActions} list={list} page={page} entries={entries} />
        </>
    );
};

