import express from 'express'
import ClassControllers from './controllers/ClassControllers'
import ConnectionsController from './controllers/ConnectionsControllers'

const router = express.Router()
const classControllers = new ClassControllers()
const connectionsController = new ConnectionsController()
interface scheduleItem {
    week_day: number
    from: string
    to: string
}

router.get('/classes', classControllers.index)
router.post('/classes', classControllers.create)

router.get('/connections', connectionsController.index)
router.post('/connections', connectionsController.create)
export default router