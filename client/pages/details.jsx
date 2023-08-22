import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Header } from '../components';
import { fetchChartData } from '../redux/reducers/chartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/loader';
import apis from '../apis';
import Modal from '../components/modal';
import Form from '../components/form';

const ListPage = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(null);
  const [modalDetails, setModalDetails] = useState(null);
  const { data, loading, error } = useSelector((state) => state.chartData);

  useEffect(() => {
    dispatch(fetchChartData());
  }, []);

  const handleEdit = (values) => {
    setModal('edit');
    setModalDetails(values);
  };

  const handleDelete = async (id) => {
    try {
      await apis.deleteChartData(id);
      dispatch(fetchChartData());
    } catch (error) {
      // todo add notification
      console.log(error);
    }
  };

  async function handleEditSubmit(values) {
    try {
      await apis.editChartData(values.id, values);
      dispatch(fetchChartData());
      setModal(false);
    } catch (error) {
      // todo add notification
      console.log('error on edit');
    }
  }

  function handleCancel(values) {
    setModal(null);
  }

  return (
    <>
      <Header />
      <Container sx={{ marginTop: 10 }}>
        <Loader loading={loading} error={error}>
          <List>
            {data?.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.from}
                  secondary={`${item.to} - Value: ${item.value}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    data-testid={`edit-button-${item.id}`}
                    color="primary"
                    onClick={() => handleEdit(item)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    data-testid={`delete-button-${item.id}`}
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Loader>
      </Container>
      {modal === 'edit' ? (
        <Modal
          data-testid="edit-modal"
          open={'edit' === modal}
          title={'Edit Node'}
        >
          <Form
            data-testid="edit-form"
            initialState={modalDetails}
            onSubmit={handleEditSubmit}
            onCancel={handleCancel}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default ListPage;
