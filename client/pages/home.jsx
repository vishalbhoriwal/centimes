import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import { Button, ButtonGroup, Container, Input } from '@mui/material';
import SankeyChart from '../components/chart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from '../redux/reducers/chartSlice';
import Loader from '../components/loader';
import Modal from '../components/modal';
import utils from '../utils';
import Form from '../components/form';
import { addChartData } from '../redux/reducers/addChartSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(null);
  const { t } = useTranslation();
  const { data, loading, error } = useSelector((state) => state.chartData);
  const initialState = {
    from: '',
    to: '',
    value: 0,
  };

  useEffect(() => {
    dispatch(fetchChartData());
  }, []);

  function handleAddSubmit(values) {
    dispatch(addChartData(values));
    dispatch(fetchChartData());
    setModal(false);
  }

  function handleCancel(values) {
    setModal(null);
  }

  function handleModal(value) {
    setModal(value);
  }

  return (
    <div>
      <Header onAddClick={() => setModal(true)} />
      <Container sx={{ marginTop: 10, overflow: 'auto' }}>
        <ButtonGroup
          sx={{ marginBottom: 5 }}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button
            style={{ textDecoration: 'none', color: 'blue' }}
            onClick={() => handleModal('add')}
          >
            {t('pages.home.add')}
          </Button>
          <Button>
            <Link
              style={{ textDecoration: 'none', color: 'blue' }}
              to="/details"
            >
              {t('pages.home.edit')}
            </Link>
          </Button>
          <Button>
            <Link
              style={{ textDecoration: 'none', color: 'blue' }}
              to="/details"
            >
              {t('pages.home.delete')}
            </Link>
          </Button>
        </ButtonGroup>
        <Loader loading={loading} error={error}>
          <SankeyChart data={utils.formatData(data)} />
        </Loader>
        {modal === 'add' ? (
          <Modal open={'add' === modal} title={t('pages.home.addNode')}>
            <Form
              initialState={initialState}
              onSubmit={handleAddSubmit}
              onCancel={handleCancel}
            />
          </Modal>
        ) : null}
      </Container>
    </div>
  );
}

export default Home;
