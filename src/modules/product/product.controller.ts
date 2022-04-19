import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';



@Controller('api/v1/product')
@ApiTags('productos')
export class ProductController {
  constructor(private service: ProductService) {}
}
