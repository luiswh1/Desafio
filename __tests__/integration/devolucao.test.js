import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Devolucao from '../../src/app/models/Devolucao';

describe('Devolution Tests')