import Table from '../components/Table'
import SearchBar from '../components/SearchBar';
import './styles/tableLayout.css'
import store from '../redux/store';
import { SelectMenu } from 'voidsplit_select_component/src/lib/SelectMenu'
export default function TableLayout({refreshPagination, handleActions, page, entries, list}) {
    return (
        <>
            <div className="parameter-bar">
                <SelectMenu handleActions={handleActions} list={[{
                    "name": "10",
                    "abbreviation": "10"
                }, {
                    "name": "15",
                    "abbreviation": "15"
                }, {
                    "name": "20",
                    "abbreviation": "20"
                }]}
                label="Number of entries"
                selectedItem={store.getState().entries.toString()}
                />
                <SearchBar id="search" label="Search"/>
            </div>
            <Table refreshPagination={refreshPagination} handleActions={handleActions} list={list} page={page} entries={entries} />
        </>
    );
};

