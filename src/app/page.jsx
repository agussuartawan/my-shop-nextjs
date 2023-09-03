import { Banner } from '@/components/cards/Banner'
import { Category } from '@/components/cards/Category'
import { Cart } from '@/components/fragments/Cart'
import { ProductCard, ProductList } from '@/components/fragments/ProductList'
import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'

export default function Home() {
    return (
        <>
            <div className="bg-white">
                <Header />
                <Cart />
                <main className="my-8">
                    <div className="container px-6 mx-auto">
                        <Banner
                            image="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
                            title="Technology"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            btnLabel="Shop Now"
                        />
                        <div className="mt-8 md:flex md:-mx-4">
                            <Category
                                image="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                                btnLabel="Play Now"
                                category="Games"
                            />
                            <Category
                                image="https://images.unsplash.com/photo-1569323110185-a92e9e1ad52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                                btnLabel="Scroll Now"
                                category="Social Media"
                            />
                        </div>
                        <ProductList category="Junk Food">
                            <ProductCard
                                image="https://images.unsplash.com/photo-1517434324-1db605ff03c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                                price={25000}
                                name="French Fries"
                                id={'alksjdkla'}
                            />
                            <ProductCard
                                image="https://images.unsplash.com/photo-1602192103300-47e66756152e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                price={25000}
                                name="Burger"
                                id={'alksjdkla'}
                            />
                        </ProductList>
                        <ProductList category="Food">
                            <ProductCard
                                image="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"
                                price={300000}
                                name="French Bread"
                                id={'alksjdkla'}
                            />
                        </ProductList>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
