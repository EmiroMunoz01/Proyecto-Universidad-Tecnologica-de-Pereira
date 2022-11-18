import React from "react";
import { Row, Col } from "react-bootstrap";
import { request } from "../helper/helper";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
PaginationProvider,
PaginationListStandalone,
SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

export default class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
        };
    }
    componentDidMount() {
        this.getData();
      }
      getData(){
        request
          .get(this.props.url)
          .then((response) => {
            this.setState({ rows: response.data });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    render() { 
        const options = {
            custom: true,
            totalSize: this.state.rows.length,
          };
        return ( 
            <ToolkitProvider
            keyField="tp"
            data={this.state.rows}
            columns={this.props.columns}
            search
          >
            {(props) => (
              <>
              <hr/>
                <PaginationProvider pagination={paginationFactory(options)}>
                  {({ paginationProps, paginationTableProps }) => (
                    <>
                      <Row>
                        <Col>
                          <SizePerPageDropdownStandalone {...paginationProps} />
                        </Col>
                        <Col>
                          <SearchBar {...props.searchProps} />
                        </Col>
                      </Row>
                      <BootstrapTable
                        keyField="bt"
                        data={this.state.rows}
                        columns={this.props.columns}
                        {...paginationTableProps}
                        {...props.baseProps}
                      />
                      <PaginationListStandalone {...paginationProps} />
                    </>
                  )}
                </PaginationProvider>
              </>
            )}
          </ToolkitProvider>
         );
    }
}
 